import React from 'react';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://dt-equip.vercel.app/';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${BASE_URL}</loc><lastmod>2022-07-11</lastmod><priority>0.8</priority></url><url><loc>${BASE_URL}/design</loc><lastmod>2022-07-11</lastmod><priority>0.6</priority></url><url><loc>${BASE_URL}/develop</loc><lastmod>2022-07-11</lastmod><priority>0.6</priority></url><url><loc>${BASE_URL}/animate</loc><lastmod>2022-07-11</lastmod><priority>0.6</priority></url><url><loc>${BASE_URL}/about</loc><lastmod>2022-07-11</lastmod><priority>0.6</priority></url></urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;