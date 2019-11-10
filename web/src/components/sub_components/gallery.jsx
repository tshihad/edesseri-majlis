import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import axios from 'axios'
import styled from 'styled-components'

const Head = styled.div`
 display: inline-block;
 padding: 1em;
 color: #1d4219;
 font-size: 1.7em;
 font-weight: 600;
 `;
export default function ImageGallery(props) {
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
        axios.get("10.4.5.22:8080/majlis/event-gallery/" + props.category)
            .then(({ data }) => {
                var photos = []
                data.result.map((image)=>{
                  photos.push()  
                })

            }).catch((err) => {
                alert(err)
            })
    }, [])
    return (
        <div >
            <Head>{props.head}</Head>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel style={{ zIndex: 3 }}
                            currentIndex={currentImage}
                            views={photos.map(x => ({
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