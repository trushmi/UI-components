interface CardsDemoData {
  id: string;
  cardTitle: string;
  cardDescription: string;
  frontImage: string;
  hoverImage?: string;
  externalLink: string;
  isExternal: boolean;
}

const cardsDemoData: CardsDemoData[] = [
  {
    id: "1",
    cardTitle: "Title 1",
    cardDescription: "Description 1",
    frontImage:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87020435_99.jpg?imwidth=1256&imdensity=1&ts=1730396049480",
    hoverImage:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/outfit/S/87020435_99-99999999_01.jpg?imwidth=1256&imdensity=1&ts=1730396049480",
    externalLink:
      "https://shop.mango.com/us/en/p/women/sweaters-and-cardigans/sweaters/knit-striped-sweater_87020435?c=99",
    isExternal: true,
  },
  {
    id: "2",
    cardTitle: "Title 2",
    cardDescription: "Description 2",
    frontImage:
      "https://bananarepublicfactory.gapfactory.com/webcontent/0057/341/245/cn57341245.jpg",
    hoverImage:
      "https://bananarepublicfactory.gapfactory.com/webcontent/0057/341/382/cn57341382.jpg",
    externalLink:
      "https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=592996001&cid=1045385&pcid=1045385&vid=1&cpos=0&cexp=368&kcid=CategoryIDs%3D1045385&cvar=2363&ctype=Listing&cpid=res25012120481443790011780",
    isExternal: true,
  },
  {
    id: "3",
    cardTitle: "Title 3",
    cardDescription: "Description 3",
    frontImage:
      "https://oldnavy.gap.com/webcontent/0057/306/062/cn57306062.jpg",
    hoverImage:
      "https://oldnavy.gap.com/webcontent/0057/306/070/cn57306070.jpg",
    externalLink:
      "https://oldnavy.gap.com/browse/product.do?pid=672531002&rrec=true&mlink=5001,1,home_onhome1_rr_2&clink=1#pdp-page-content",
    isExternal: true,
  },
  {
    id: "4",
    cardTitle: "Title 4",
    cardDescription: "Description 4",
    frontImage:
      "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD082/2CYRF0002/1BD082_2CYR_F0002_V_DVJ_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",

    hoverImage:
      "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD082/2CYRF0002/1BD082_2CYR_F0002_V_DVJ_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
    externalLink:
      "https://www.prada.com/us/en/p/leather-shoulder-bag/1BD082_2CYR_F0002_V_DVJ",
    isExternal: true,
  },
];

export default cardsDemoData;
