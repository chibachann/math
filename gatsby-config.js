module.exports = {
    siteMetadata: {
        title: 'math',
        description: "クリエイティブなデジタルソリューションで、あなたのビジネスストーリーを紡ぐ。最先端のウェブデザインと技術で、お客様のビジョンを現実に。",
        siteUrl: "https://www.storyweb-solutions.com",
        author: "chiba",
        lang: "ja",
        image: "topimage/topimage.jpg",
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              icon: `static/favicon/favicon.png`, // 使用するファビコン画像のパス
            },
        },
    ],
}
