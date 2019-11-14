package core

// MEMBER_PREFIX appends prefix to member id
const MEMBER_PREFIX = "E"
const GALLERY_LOCATION = "public/gallery"
const PROFILE_LOCATION = "private/profile"
const PUBLIC_DOWNLOAD_LOCATION = "public/downloads"
const PRIVATE_DOWNLOAD_LOCATION = "private/downloads"
const DOWNLOAD_TAG = "upload_file"

var CATEGORIES = []string{"milad", "eid", "iftar", "sports", "meet_and_greet", "other"}
var ALLOW_DOWNLOAD_EXT = []string{"pdf"}
var ALLOW_GALLERY_EXT = []string{"jpg", "jpeg", "png"}

const RANDOM_LENGTH = 32
const CACHE_RETRY = 5
const UPCOMING_EVENT_COUNT = 4
const STATIC = "static/"
const MEMBERID_TAG = "member_id"
const CATEGORY_TAG = "category"
