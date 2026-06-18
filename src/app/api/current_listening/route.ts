export const GET = async () => {
    const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=xxJonakAdiptaxx&api_key=${process.env.LASTFM_API}&format=json`
    );
    const data = (await res.json()).recenttracks.track[0];

    return Response.json(data);
};
