const staticCacheName = `jonakadiptakalita-v${new Date().getTime()}`;
const filesToCache = [
	"/",
	"/manifest.json",
	"/my_photos/",
	"/my_photos/grant_permission/",
	"/about/",
	"/contact_me/",
	"/social_media/",
	"/search",
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
	"/styles/base.css",
	"/styles/home.css",
	"/styles/about.css",
	"/styles/your_profile/your_account.css",
	"/scripts/base.js",
	"/scripts/home.js",
	"/static/images/logo.png",
	"/static/images/badges/gamer.png",
	"/static/images/badges/picture_perm.png",
	"/static/images/badges/programmer.png",
	"/static/images/badges/staff.png",
	"/media/images/Agar.png",
	"/media/images/Ducklings.png",
	"/media/images/Hole-io.png",
	"/media/images/Krunker.png",
	"/media/images/Paper.png",
	"/media/images/Scribbl.png",
	"/media/images/meAndmyElderSis1.jpg",
	"/media/images/MeAndMyElderSis2.png",
	"/media/images/meAndmyElderSis3.jpg",
	"/media/images/meAndmyGranny1.jpg",
	"/media/images/meAndmyMom1.jpg",
	"/media/images/meAndmyMom2.jpg",
	"/media/images/meAndmyMom3.jpg",
	"/media/images/meAndmyMom4.jpg",
	"/media/images/meAndmyMom5.jpg",
	"/media/images/meAndmyMomwithmy_Auntie1.png",
	"/media/images/MeHoldingAGun.jpg",
	"/media/images/meMyMomAndMyDadinAWedding.jpg",
	"/media/images/MeMyMomAndMyDADInKajiranga1.png",
	"/media/images/MyfirstPicwithMynewPhone.jpg",
	"/media/images/MyPaternalFamily.jpg",
	"/media/images/MyPhoto1.jpg",
	"/media/images/MyPicInKajiranga1.jpg",
	"/media/images/MysecondPicwithMynewPhone.jpg",
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
