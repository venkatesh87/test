import React from 'react';
import Head from 'next/head';

const ModuleCustomHead = () => (
    <Head>
        <title>Aasaan Shop</title>
        <link rel="shortcut icon" href="/static/img/favi.png" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=no" />
        <meta
            name="description"
            content="Create an online store for free"
        />
        <meta name="keywords" content="Create an online store for free" />
        <link
            rel="stylesheet"
            href="/static/fonts/Linearicons/Font/demo-files/demo.css"
        />

        <link
            rel="stylesheet"
            href="/static/fonts/font-awesome/css/font-awesome.min.css"
        />

        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/bootstrap.min.css"
        />
    </Head>
);

export default ModuleCustomHead;
