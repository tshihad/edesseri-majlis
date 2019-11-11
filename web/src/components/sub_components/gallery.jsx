import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from 'axios';
import styled from 'styled-components';
import {SamplePhotos} from './photos'

const Head = styled.div`
 display: inline-block;
 padding: 1em;
 color: #1d4219;
 font-size: 1.7em;
 font-weight: 600;
 `;
export default function ImageGallery(props) {
    const [GalleryPhotos, setPhotos] = React.useState(SamplePhotos)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    useEffect(() => {
        axios.get("http://localhost:8080/majlis/event-gallery/" + props.category)
            .then(({ data }) => {
                var picrures = []
                data.result.map((image) => {
                    picrures.push({ "src": image.PhotoLocaltion, width:image.Width, height: image.Height })
                })
                    setPhotos(picrures)
            }).catch((err) => {
                alert(err)
            })
    }, [])
    return (
        <div >
            <Head>{props.head}</Head>
            <Gallery photos={GalleryPhotos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel style={{ zIndex: 3 }}
                            currentIndex={currentImage}
                            views={GalleryPhotos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}