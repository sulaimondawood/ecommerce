interface HeroProp {
  hero: {
    text: string;
    desc: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    slug: {
      _type: "slug";
      current: string;
    };
  };
}

interface Products {
  desc: string;
  slug: string;
  price: number;
  title: string;
  image: [
    {
      asset: {
        _ref: string;
      };
    }
  ];
}
