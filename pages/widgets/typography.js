import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Typography from '~/components/elements/typography';

const ShoppingCartPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Typography',
        },
    ];

    return (
        <ContainerPage title="Typography">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>Typography</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <Typography />
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ShoppingCartPage;
