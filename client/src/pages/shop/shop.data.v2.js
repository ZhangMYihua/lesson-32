const SHOP_DATA = [
  {
    id: 1,
    title: 'Furnitures',
    routeName: 'furnitures',
    items: [
      {
        id: 1,
        name: 'Outdoor Teak Dining Table',
        imageUrl: 'https://i.ibb.co/Wfyqg3J/Outdoor-Teak-Dining-Table.png',
        price: 25,
        description:"L1620 x W800 x H750mm",
        availability: "1 month",
        type: "Indoor"
      },
      {
        id: 2,
        name: 'Indoor Teak Study Table',
        imageUrl: 'https://i.ibb.co/1fyTZwP/Indoor-Teak-Study-Table.png',
        price: 18,
        description:"L2200 x W900 x H760mm",
        availability: "1 month",
        type: "Indoor"
      },
      {
        id: 3,
        name: 'Indoor Teak Magazine Shelf',
        imageUrl: 'https://i.ibb.co/nnKwGbN/Indoor-Teak-Magazine-Shelf.png',
        price: 35,
        description:"L1400mm x W350mm x H820mm",
        availability: "1 month",
        type: "Indoor"
      },
      {
        id: 4,
        name: 'Marble Coffee Table',
        imageUrl: 'https://i.ibb.co/BGSxVTs/Marble-Coffee-Table.png',
        price: 25,
        description:"L1200mm x W600mm x H500mm",
        availability: "1 month",
        type: "Indoor"
      },
      {
        id: 5,
        name: '2-Seater Fabric Sofa',
        imageUrl: 'https://i.ibb.co/f0GZmdt/2-Seater-Fabric-Sofa.png',
        price: 18,
        description:"L1890mm x D900mm x H820mm",
        availability: "~2.5 month",
        type: "Indoor"
      },
      {
        id: 6,
        name: 'Single Seater Fabric Armchair',
        imageUrl: 'https://i.ibb.co/P1wyNc4/Single-Seater-Fabric-Armchair.png',
        price: 14,
        description:"L700mm x D700mm x H900mm",
        availability: "~2.5 month",
        type: "Indoor"
      },
      {
        id: 7,
        name: 'Wall Mounted Lockable Notice Board',
        imageUrl: 'https://i.ibb.co/7y8HbDF/Wall-Mounted-Lockable.png',
        price: 18,
        description:"L900mm x H600mm",
        availability: "1-2 weeks",
        type: "Indoor"
      },
      {
        id: 8,
        name: 'Display Storage Cabinet',
        imageUrl: 'https://i.ibb.co/4Sdz783/Display-Storage-Cabinet.png',
        price: 18,
        description:"L1260mm x D300mm x H1590mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 9,
        name: 'Kitchen Island with Storage',
        imageUrl: 'https://i.ibb.co/54zvGzr/Kitchen-Island-with-Storage.png',
        price: 18,
        description:"L2100mm x W700mm x H1100mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 10,
        name: 'Kitchen Wall Hung Top Cabinet',
        imageUrl: 'https://i.ibb.co/G5HSqxM/Kitchen-Wall-Hung-Top-Cabinet.png',
        price: 18,
        description:"L3600mm x D300mm x H600mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 11,
        name: 'Kitchen Bottom Cabinet',
        imageUrl: 'https://i.ibb.co/G5HSqxM/Kitchen-Wall-Hung-Top-Cabinet.png',
        price: 18,
        description:"L3600mm x D600mm x H870mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 12,
        name: 'Kitchen Cabinets',
        imageUrl: 'https://i.ibb.co/YQL6yvS/Kitchen-Cabinets.png',
        price: 18,
        description:"Customizable shape & size",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 13,
        name: 'Wall Hung Bathroom Vanity',
        imageUrl: 'https://i.ibb.co/LJNGVjz/Wall-Hung-Bathroom-Vanity.png',
        price: 18,
        description:"L750mm x D580mm x H500mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 14,
        name: 'Wardrobe',
        imageUrl: 'https://i.ibb.co/C1TBvx2/Wardrobe.png',
        price: 18,
        description:"L2100mm x D600mm x H3100mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 15,
        name: 'Wall Hung Louvre Shoe Cabinet',
        imageUrl: 'https://i.ibb.co/vdxHLY9/Wall-Hung-Louvre-Shoe-Cabinet.png',
        price: 18,
        description:"L1200mm x W400mm x H2100mm",
        availability: "1-2 months",
        type: "Indoor"
      },
      {
        id: 16,
        name: 'Bathroom Sliding Door with Frosted Glass',
        imageUrl: 'https://i.ibb.co/dMhY9DW/Bathroom-Sliding-Door-with-Frosted-Glass.png',
        price: 18,
        description:"L900mm x H2400mm",
        availability: "1-2 months",
        type: "Outdoor"
      },
      {
        id: 17,
        name: 'Outdoor Gate',
        imageUrl: 'https://i.ibb.co/5sj8Nnn/Outdoor-Gate.png',
        price: 18,
        description:"L1700mm x H1200mm",
        availability: "1-2 months",
        type: "Outdoor"
      }
    ]
  },
  {
    id: 2,
    title: 'Supplies',
    routeName: 'Supplies',
    items: [
      {
        id: 1,
        name: 'Parisi Slim PN720',
        imageUrl: 'https://i.ibb.co/XbqsYjm/Parisi-Slim-PN720.png',
        price: 220,
        description:"W365mm x D505mm x H360mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 2,
        name: 'Parisi Linfa PN780',
        imageUrl: 'https://i.ibb.co/kJVwhHV/Parisi-Linfa-PN780.png',
        price: 280,
        description:"W365mm x D530mm x H350mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 3,
        name: 'Grohe Eurocosmo',
        imageUrl: 'https://i.ibb.co/4YRqvLk/Grohe-Eurosmart.png',
        price: 110,
        description:"W370mm x D568mm x H355mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 4,
        name: 'Grohe Eurosmart',
        imageUrl: 'https://i.ibb.co/4YRqvLk/Grohe-Eurosmart.png',
        price: 280,
        description:"W367mm x D525mm x H369mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 5,
        name: 'Kale',
        imageUrl: 'https://i.ibb.co/4t02fGS/Kale-Wall-Hung-WC.png',
        price: 160,
        description:"W485mm x D350mm x H340mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 6,
        name: 'American Standard 3105',
        imageUrl: 'https://i.ibb.co/jkpJXT4/American-Standard-3105.png',
        price: 160,
        description:"W365mm x D560mm x H352mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 7,
        name: 'American Standard 3119',
        imageUrl: 'https://i.ibb.co/G5Y9vd2/American-Standard-3119.png',
        price: 160,
        description:"W370mm x D580mm x H340mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 8,
        name: 'Vitra VT5320',
        imageUrl: 'https://i.ibb.co/bKFsfGx/Vitra-VT5320.png',
        price: 190,
        description:"W480mm x D360mm x H350mm",
        availability: "1 week",
        type: "W.C."
      },

      {
        id: 9,
        name: 'Vitra VT5160',
        imageUrl: 'https://i.ibb.co/PMZVYY6/Vitra-VT5160.png',
        price: 200,
        description:"W360mm x D520mm x H360mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 10,
        name: 'Vitra VT5139',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        description:"W360mm x D520mm x H360mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 11,
        name: 'Vitra VT4305',
        imageUrl: 'https://i.ibb.co/zZcgdGj/Vitra-VT4305.png',
        price: 160,
        description:"W355mm x D545mm x H345mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 12,
        name: 'ECE Banyo',
        imageUrl: 'https://i.ibb.co/WnjGCSk/ECE-Banyo-Wall-Hung-WC.png',
        price: 160,
        description:"W365mm x D495mm x H305mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 13,
        name: 'Mayfair WC8126',
        imageUrl: 'https://i.ibb.co/8g7g9LY/Mayfair-WC8126.png',
        price: 190,
        description:"W400mm x D700mm x H630mm",
        availability: "1 week",
        type: "W.C."
      },
      
      {
        id: 14,
        name: 'Mayfair WC8116',
        imageUrl: 'https://i.ibb.co/fMgMVsz/Mayfair-WC8116.png',
        price: 200,
        description:"W390mm x D680mm x H780mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 15,
        name: 'Minerva WC10010',
        imageUrl: 'https://i.ibb.co/pWZknfb/Minerva-WC10010.png',
        price: 280,
        description:"W360mm x D670mm x H715mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 16,
        name: 'Minerva WC10003',
        imageUrl: 'https://i.ibb.co/yq2NmZR/Minerva-WC10003.png',
        price: 160,
        description:"W385mm x D690mm x H750mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 17,
        name: 'Minerva WC10002',
        imageUrl: 'https://i.ibb.co/6JDX274/Minerva-WC10002.png',
        price: 160,
        description:"W375mm x D700mm x H830mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 18,
        name: 'Inspire 6099',
        imageUrl: 'https://i.ibb.co/Y3zZyC9/Inspire-6099.png',
        price: 160,
        description:"W420mm x D700mm x H740mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 19,
        name: 'Inspire 6035',
        imageUrl: 'https://i.ibb.co/bLjwQ4P/Inspire-6035.png',
        price: 190,
        description:"W385mm x D700mm x H790mm",
        availability: "1 week",
        type: "W.C."
      },

      {
        id: 20,
        name: 'American Standard CL25315',
        imageUrl: 'https://i.ibb.co/VVFrNfY/CL25315.png',
        price: 200,
        description:"W374mm x D740mm x H730mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 21,
        name: 'American Standard CL20415',
        imageUrl: 'https://i.ibb.co/K2VNQYH/American-Standard-CL20415.png',
        price: 160,
        description:"W450mm x D750mm x H710mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 22,
        name: 'American Standard TF2007',
        imageUrl: 'https://i.ibb.co/GMFrKK2/American-Standard-TF2007-One-Piece.png',
        price: 160,
        description:"W376mm x D740mm x H654mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 23,
        name: 'Baron W888',
        imageUrl: 'https://i.ibb.co/mGJqc7j/Baron-W888.png',
        price: 160,
        description:"W370mm x D700mm x H830mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 24,
        name: 'Baron W368',
        imageUrl: 'https://i.ibb.co/wWT8KRS/Baron-W368.png',
        price: 190,
        description:"W370mm x D700mm x H795mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 25,
        name: 'Ideal Standard TF2303SC',
        imageUrl: 'https://i.ibb.co/M1P0T9M/Ideal-Standard-TF2303-SC.png',
        price: 200,
        description:"W374mm x D725mm x H787mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 26,
        name: 'Parisi Slim PN700',
        imageUrl: 'https://i.ibb.co/N9JYSRw/Parisi-Slim-PN700.png',
        price: 160,
        description:"W365mm x D650mm x H845mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 27,
        name: 'Parisi Linfa PN760',
        imageUrl: 'https://i.ibb.co/P9QJgvw/Parisi-Linfa-PN760.png',
        price: 190,
        description:"W365mm x D610mm x H830mm",
        availability: "1 week",
        type: "W.C."
      },
      {
        id: 28,
        name: 'American Standard Compact Codie',
        imageUrl: 'https://i.ibb.co/tbhgZzw/American-Standard-Compact-Codie.png',
        price: 200,
        description:"W386mm x D680mm x H782mm",
        availability: "1 week",
        type: "W.C."
      }
    ]
  },
  {
    id: 3,
    title: 'Basin',
    routeName: 'Basin',
    items: [
      {
        id: 1,
        name: 'BC-LKW-K820 Vessel Basin',
        imageUrl: 'https://i.ibb.co/KhP4JXS/BC-LKW-K820-Vessel-Basin.png',
        price: 220,
        description:"L520mm x W345mm x D135mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 2,
        name: 'Vitra 5475B Undermount Basin',
        imageUrl: 'https://i.ibb.co/GCdsYv5/Vitra-5475-B-Undermount-Basin.png',
        price: 280,
        description:"L550mm x W370mm x D165mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 3,
        name: 'A470WB Vessel Basin',
        imageUrl: 'https://i.ibb.co/GWzc6hQ/A470-WB-Vessel-Basin.png',
        price: 110,
        description:"L670mm x W440mm x D145mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 4,
        name: 'A170BLK Vessel Basin',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        price: 280,
        description:"L670mm x W440mm x D145mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 5,
        name: 'BC-LKW-K829Wall Mount/Vessel Basin',
        imageUrl: 'https://i.ibb.co/P68Qj09/BC-LKW-K829-Wall-Mount-Vessel-Basin.png',
        price: 160,
        description:"L520mm x W420mm x D155mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 6,
        name: 'BCO4021 Vessel Basin',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"L610mm x W390mm x D110mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 7,
        name: 'Grohe 39216000 Vessel Basin',
        imageUrl: 'https://i.ibb.co/QmP74Jr/Grohe-39216000-Vessel-Basin.png',
        price: 160,
        description:"L495mm x W380mm x D145mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 8,
        name: 'American Standard 0459 Undermount Basin',
        imageUrl: 'https://i.ibb.co/YcvVLfQ/American-Standard-0459-Undermount-Basin.png',
        price: 190,
        description:"L600mm x W422mm x D209mm",
        availability: "1 week",
        "type":"Basin"
      },

      {
        id: 9,
        name: 'American Standard F646 Vessel Basin',
        imageUrl: 'https://i.ibb.co/LvPrXCf/American-Standard-F646-Vessel-Basin.png',
        price: 200,
        description:"L550mm x W420mm x D180mm",
        availability: "1 week",
        "type":"Basin"
      },
      {
        id: 10,
        name: 'LT1059A Vessel Basin',
        imageUrl: 'https://i.ibb.co/Jn8xhF5/LT1059-A-Vessel-Basin.png',
        price: 160,
        description:"W355mm x D545mm x H345mm",
        availability: "1 week",
        "type":"Basin"
      }
    ]
  }
];

export default SHOP_DATA;
