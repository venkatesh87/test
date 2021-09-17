import React from 'react';
import WidgetShopSubCategories from '~/components/shared/widgets/WidgetShopSubCategories';

const ModuleSidebarCategories = (props) => {
  const {subCategories, categoryName} = props;
  return (
    <div className="ps-shop__sidebar">
      <WidgetShopSubCategories
        categoryName={categoryName}
        subCategories={subCategories}
      />
    </div>
  );
};

export default ModuleSidebarCategories;
