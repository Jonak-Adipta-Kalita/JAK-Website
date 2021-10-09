const staticCacheName = `jonakadiptakalita-v${new Date().getTime()}`;
const filesToCache = [
	"/",
	"/manifest.json",
	"/my_photos/",
	"/my_photos/grant_permission/",
	"/about/",
	"/contact_me/",
	"/social_media/",
	"/games/",
	"/games/my_fav/",
	"/games/my_own/",
	"/discord_widget/",
	"/announcements/",
	"/announcements/poke_go_code/",
	"/your_profile/signup/",
	"/your_profile/login/",
	"/your_profile/logout/",
	"/your_profile/your_account/",
	"/your_profile/your_account/change_password/",
	"/your_profile/notifications/",
	"/static/styles/base.css",
	"/static/styles/home.css",
	"/static/styles/about.css",
	"/static/styles/your_profile/your_account.css",
	"/static/scripts/base.js",
	"/static/scripts/home.js",
	"/static/images/logo.png",
	"/static/images/badges/gamer.png",
	"/static/images/badges/picture_perm.png",
	"/static/images/badges/programmer.png",
	"/static/images/badges/staff.png",
	"/media/image/Agar.png",
	"/media/image/Ducklings.png",
	"/media/image/Hole-io.png",
	"/media/image/Krunker.png",
	"/media/image/Paper.png",
	"/media/image/Scribbl.png",
	"/media/image/meAndmyElderSis1.jpg",
	"/media/image/MeAndMyElderSis2.png",
	"/media/image/meAndmyElderSis3.jpg",
	"/media/image/meAndmyGranny1.jpg",
	"/media/image/meAndmyMom1.jpg",
	"/media/image/meAndmyMom2.jpg",
	"/media/image/meAndmyMom3.jpg",
	"/media/image/meAndmyMom4.jpg",
	"/media/image/meAndmyMom5.jpg",
	"/media/image/meAndmyMomwithmy_Auntie1.png",
	"/media/image/MeHoldingAGun.jpg",
	"/media/image/meMyMomAndMyDadinAWedding.jpg",
	"/media/image/MeMyMomAndMyDADInKajiranga1.png",
	"/media/image/MyfirstPicwithMynewPhone.jpg",
	"/media/image/MyPaternalFamily.jpg",
	"/media/image/MyPhoto1.jpg",
	"/media/image/MyPicInKajiranga1.jpg",
	"/media/image/MysecondPicwithMynewPhone.jpg",
];

self.addEventListener("install", (event) => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName.startsWith("jonakadiptakalita-"))
                    .filter((cacheName) => cacheName !== staticCacheName)
                    .map((cacheName) => caches.delete(cacheName))
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match("offline");
            })
    );
});
