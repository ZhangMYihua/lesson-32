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
        availability: "1 month"
      },
      {
        id: 2,
        name: 'Indoor Teak Study Table',
        imageUrl: 'https://i.ibb.co/1fyTZwP/Indoor-Teak-Study-Table.png',
        price: 18,
        description:"L2200 x W900 x H760mm",
        availability: "1 month"
      },
      {
        id: 3,
        name: 'Indoor Teak Magazine Shelf',
        imageUrl: 'https://i.ibb.co/nnKwGbN/Indoor-Teak-Magazine-Shelf.png',
        price: 35,
        description:"L1400mm x W350mm x H820mm",
        availability: "1 month"
      },
      {
        id: 4,
        name: 'Marble Coffee Table',
        imageUrl: 'https://i.ibb.co/BGSxVTs/Marble-Coffee-Table.png',
        price: 25,
        description:"L1200mm x W600mm x H500mm",
        availability: "1 month"
      },
      {
        id: 5,
        name: '2-Seater Fabric Sofa',
        imageUrl: 'https://i.ibb.co/f0GZmdt/2-Seater-Fabric-Sofa.png',
        price: 18,
        description:"L1890mm x D900mm x H820mm",
        availability: "~2.5 month"
      },
      {
        id: 6,
        name: 'Single Seater Fabric Armchair',
        imageUrl: 'https://i.ibb.co/P1wyNc4/Single-Seater-Fabric-Armchair.png',
        price: 14,
        description:"L700mm x D700mm x H900mm",
        availability: "~2.5 month"
      },
      {
        id: 7,
        name: 'Wall Mounted Lockable Notice Board',
        imageUrl: 'https://i.ibb.co/7y8HbDF/Wall-Mounted-Lockable.png',
        price: 18,
        description:"L900mm x H600mm",
        availability: "1-2 weeks"
      },
      {
        id: 8,
        name: 'Display Storage Cabinet',
        imageUrl: 'https://i.ibb.co/4Sdz783/Display-Storage-Cabinet.png',
        price: 18,
        description:"L1260mm x D300mm x H1590mm",
        availability: "1-2 months"
      },
      {
        id: 9,
        name: 'Kitchen Island with Storage',
        imageUrl: 'https://i.ibb.co/54zvGzr/Kitchen-Island-with-Storage.png',
        price: 18,
        description:"L2100mm x W700mm x H1100mm",
        availability: "1-2 months"
      },
      {
        id: 10,
        name: 'Kitchen Wall Hung Top Cabinet',
        imageUrl: 'https://i.ibb.co/G5HSqxM/Kitchen-Wall-Hung-Top-Cabinet.png',
        price: 18,
        description:"L3600mm x D300mm x H600mm",
        availability: "1-2 months"
      },
      {
        id: 11,
        name: 'Kitchen Bottom Cabinet',
        imageUrl: 'https://i.ibb.co/G5HSqxM/Kitchen-Wall-Hung-Top-Cabinet.png',
        price: 18,
        description:"L3600mm x D600mm x H870mm",
        availability: "1-2 months"
      },
      {
        id: 12,
        name: 'Kitchen Cabinets',
        imageUrl: 'https://i.ibb.co/YQL6yvS/Kitchen-Cabinets.png',
        price: 18,
        description:"Customizable shape & size",
        availability: "1-2 months"
      },
      {
        id: 13,
        name: 'Wall Hung Bathroom Vanity',
        imageUrl: 'https://i.ibb.co/LJNGVjz/Wall-Hung-Bathroom-Vanity.png',
        price: 18,
        description:"L750mm x D580mm x H500mm",
        availability: "1-2 months"
      },
      {
        id: 14,
        name: 'Wardrobe',
        imageUrl: 'https://i.ibb.co/C1TBvx2/Wardrobe.png',
        price: 18,
        description:"L2100mm x D600mm x H3100mm",
        availability: "1-2 months"
      },
      {
        id: 15,
        name: 'Wall Hung Louvre Shoe Cabinet',
        imageUrl: 'https://i.ibb.co/vdxHLY9/Wall-Hung-Louvre-Shoe-Cabinet.png',
        price: 18,
        description:"L1200mm x W400mm x H2100mm",
        availability: "1-2 months"
      },
      {
        id: 16,
        name: 'Bathroom Sliding Door with Frosted Glass',
        imageUrl: 'https://i.ibb.co/dMhY9DW/Bathroom-Sliding-Door-with-Frosted-Glass.png',
        price: 18,
        description:"L900mm x H2400mm",
        availability: "1-2 months"
      },
      {
        id: 17,
        name: 'Outdoor Gate',
        imageUrl: 'https://i.ibb.co/5sj8Nnn/Outdoor-Gate.png',
        price: 18,
        description:"L1700mm x H1200mm",
        availability: "1-2 months"
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
        availability: "1 week"
      },
      {
        id: 2,
        name: 'Parisi Linfa PN780',
        imageUrl: 'https://i.ibb.co/kJVwhHV/Parisi-Linfa-PN780.png',
        price: 280,
        description:"W365mm x D530mm x H350mm",
        availability: "1 week"
      },
      {
        id: 3,
        name: 'Grohe Eurocosmo',
        imageUrl: 'https://i.ibb.co/4YRqvLk/Grohe-Eurosmart.png',
        price: 110,
        description:"W370mm x D568mm x H355mm",
        availability: "1 week"
      },
      {
        id: 4,
        name: 'Grohe Eurosmart',
        imageUrl: 'https://i.ibb.co/4YRqvLk/Grohe-Eurosmart.png',
        price: 280,
        description:"W367mm x D525mm x H369mm",
        availability: "1 week"
      },
      {
        id: 5,
        name: 'Kale',
        imageUrl: 'https://i.ibb.co/4t02fGS/Kale-Wall-Hung-WC.png',
        price: 160,
        description:"W485mm x D350mm x H340mm",
        availability: "1 week"
      },
      {
        id: 6,
        name: 'American Standard 3105',
        imageUrl: 'https://i.ibb.co/jkpJXT4/American-Standard-3105.png',
        price: 160,
        description:"W365mm x D560mm x H352mm",
        availability: "1 week"
      },
      {
        id: 7,
        name: 'American Standard 3119',
        imageUrl: 'https://i.ibb.co/G5Y9vd2/American-Standard-3119.png',
        price: 160,
        description:"W370mm x D580mm x H340mm",
        availability: "1 week"
      },
      {
        id: 8,
        name: 'Vitra VT5320',
        imageUrl: 'https://i.ibb.co/bKFsfGx/Vitra-VT5320.png',
        price: 190,
        description:"W480mm x D360mm x H350mm",
        availability: "1 week"
      },

      {
        id: 9,
        name: 'Vitra VT5160',
        imageUrl: 'https://i.ibb.co/PMZVYY6/Vitra-VT5160.png',
        price: 200,
        description:"W360mm x D520mm x H360mm",
        availability: "1 week"
      },
      {
        id: 10,
        name: 'Vitra VT5139',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        description:"W360mm x D520mm x H360mm",
        availability: "1 week"
      },
      {
        id: 11,
        name: 'Vitra VT4305',
        imageUrl: 'https://i.ibb.co/zZcgdGj/Vitra-VT4305.png',
        price: 160,
        description:"W355mm x D545mm x H345mm",
        availability: "1 week"
      },
      {
        id: 12,
        name: 'ECE Banyo',
        imageUrl: 'https://i.ibb.co/WnjGCSk/ECE-Banyo-Wall-Hung-WC.png',
        price: 160,
        description:"W365mm x D495mm x H305mm",
        availability: "1 week"
      },
      {
        id: 13,
        name: 'Mayfair WC8126',
        imageUrl: 'https://i.ibb.co/8g7g9LY/Mayfair-WC8126.png',
        price: 190,
        description:"W400mm x D700mm x H630mm",
        availability: "1 week"
      },
      
      {
        id: 14,
        name: 'Mayfair WC8116',
        imageUrl: 'https://i.ibb.co/fMgMVsz/Mayfair-WC8116.png',
        price: 200,
        description:"W390mm x D680mm x H780mm",
        availability: "1 week"
      },
      {
        id: 15,
        name: 'Minerva WC10010',
        imageUrl: 'https://i.ibb.co/pWZknfb/Minerva-WC10010.png',
        price: 280,
        description:"W360mm x D670mm x H715mm",
        availability: "1 week"
      },
      {
        id: 16,
        name: 'Minerva WC10003',
        imageUrl: 'https://i.ibb.co/yq2NmZR/Minerva-WC10003.png',
        price: 160,
        description:"W385mm x D690mm x H750mm",
        availability: "1 week"
      },
      {
        id: 17,
        name: 'Minerva WC10002',
        imageUrl: 'https://i.ibb.co/6JDX274/Minerva-WC10002.png',
        price: 160,
        description:"W375mm x D700mm x H830mm",
        availability: "1 week"
      },
      {
        id: 18,
        name: 'Inspire 6099',
        imageUrl: 'https://i.ibb.co/Y3zZyC9/Inspire-6099.png',
        price: 160,
        description:"W420mm x D700mm x H740mm",
        availability: "1 week"
      },
      {
        id: 19,
        name: 'Inspire 6035',
        imageUrl: 'https://i.ibb.co/bLjwQ4P/Inspire-6035.png',
        price: 190,
        description:"W385mm x D700mm x H790mm",
        availability: "1 week"
      },

      {
        id: 20,
        name: 'American Standard CL25315',
        imageUrl: 'https://i.ibb.co/VVFrNfY/CL25315.png',
        price: 200,
        description:"W374mm x D740mm x H730mm",
        availability: "1 week"
      },
      {
        id: 21,
        name: 'American Standard CL20415',
        imageUrl: 'https://i.ibb.co/K2VNQYH/American-Standard-CL20415.png',
        price: 160,
        description:"W450mm x D750mm x H710mm",
        availability: "1 week"
      },
      {
        id: 22,
        name: 'American Standard TF2007',
        imageUrl: 'https://i.ibb.co/GMFrKK2/American-Standard-TF2007-One-Piece.png',
        price: 160,
        description:"W376mm x D740mm x H654mm",
        availability: "1 week"
      },
      {
        id: 23,
        name: 'Baron W888',
        imageUrl: 'https://i.ibb.co/mGJqc7j/Baron-W888.png',
        price: 160,
        description:"W370mm x D700mm x H830mm",
        availability: "1 week"
      },
      {
        id: 24,
        name: 'Baron W368',
        imageUrl: 'https://i.ibb.co/wWT8KRS/Baron-W368.png',
        price: 190,
        description:"W370mm x D700mm x H795mm",
        availability: "1 week"
      },
      {
        id: 25,
        name: 'Ideal Standard TF2303SC',
        imageUrl: 'https://i.ibb.co/M1P0T9M/Ideal-Standard-TF2303-SC.png',
        price: 200,
        description:"W374mm x D725mm x H787mm",
        availability: "1 week"
      },
      {
        id: 26,
        name: 'Parisi Slim PN700',
        imageUrl: 'https://i.ibb.co/N9JYSRw/Parisi-Slim-PN700.png',
        price: 160,
        description:"W365mm x D650mm x H845mm",
        availability: "1 week"
      },
      {
        id: 27,
        name: 'Parisi Linfa PN760',
        imageUrl: 'https://i.ibb.co/P9QJgvw/Parisi-Linfa-PN760.png',
        price: 190,
        description:"W365mm x D610mm x H830mm",
        availability: "1 week"
      },
      {
        id: 28,
        name: 'American Standard Compact Codie',
        imageUrl: 'https://i.ibb.co/tbhgZzw/American-Standard-Compact-Codie.png',
        price: 200,
        description:"W386mm x D680mm x H782mm",
        availability: "1 week"
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
        availability: "1 week"
      },
      {
        id: 2,
        name: 'Vitra 5475B Undermount Basin',
        imageUrl: 'https://i.ibb.co/GCdsYv5/Vitra-5475-B-Undermount-Basin.png',
        price: 280,
        description:"L550mm x W370mm x D165mm",
        availability: "1 week"
      },
      {
        id: 3,
        name: 'A470WB Vessel Basin',
        imageUrl: 'https://i.ibb.co/GWzc6hQ/A470-WB-Vessel-Basin.png',
        price: 110,
        description:"L670mm x W440mm x D145mm",
        availability: "1 week"
      },
      {
        id: 4,
        name: 'A170BLK Vessel Basin',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        price: 280,
        description:"L670mm x W440mm x D145mm",
        availability: "1 week"
      },
      {
        id: 5,
        name: 'BC-LKW-K829Wall Mount/Vessel Basin',
        imageUrl: 'https://i.ibb.co/P68Qj09/BC-LKW-K829-Wall-Mount-Vessel-Basin.png',
        price: 160,
        description:"L520mm x W420mm x D155mm",
        availability: "1 week"
      },
      {
        id: 6,
        name: 'BCO4021 Vessel Basin',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"L610mm x W390mm x D110mm",
        availability: "1 week"
      },
      {
        id: 7,
        name: 'Grohe 39216000 Vessel Basin',
        imageUrl: 'https://i.ibb.co/QmP74Jr/Grohe-39216000-Vessel-Basin.png',
        price: 160,
        description:"L495mm x W380mm x D145mm",
        availability: "1 week"
      },
      {
        id: 8,
        name: 'American Standard 0459 Undermount Basin',
        imageUrl: 'https://i.ibb.co/YcvVLfQ/American-Standard-0459-Undermount-Basin.png',
        price: 190,
        description:"L600mm x W422mm x D209mm",
        availability: "1 week"
      },

      {
        id: 9,
        name: 'American Standard F646 Vessel Basin',
        imageUrl: 'https://i.ibb.co/LvPrXCf/American-Standard-F646-Vessel-Basin.png',
        price: 200,
        description:"L550mm x W420mm x D180mm",
        availability: "1 week"
      },
      {
        id: 10,
        name: 'LT1059A Vessel Basin',
        imageUrl: 'https://i.ibb.co/Jn8xhF5/LT1059-A-Vessel-Basin.png',
        price: 160,
        description:"W355mm x D545mm x H345mm",
        availability: "1 week"
      }
    ]
  },
  {
    id: 4,
    title: 'Tap',
    routeName: 'Tap',
    items: [
      {
        id: 1,
        name: 'FFAS0707 Tall Tap',
        imageUrl: 'https://i.ibb.co/KhP4JXS/BC-LKW-K820-Vessel-Basin.png',
        price: 220,
        description:"D180mm x H304mm, Dia (Base) 50mm, Dia (Body) 42mm",
        availability: "1 week"
      },
      {
        id: 2,
        name: 'Pozzi X321L Tall Tap',
        imageUrl: 'https://i.ibb.co/GCdsYv5/Vitra-5475-B-Undermount-Basin.png',
        price: 280,
        description:"D150mm x H310mm, Spout D120mm, Dia (Base) 60mm, Dia (Body) 40mm",
        availability: "1 week"
      },
      {
        id: 3,
        name: 'FT7102 Tall Tap',
        imageUrl: 'https://i.ibb.co/GWzc6hQ/A470-WB-Vessel-Basin.png',
        price: 110,
        description:"",
        availability: "1 week"
      },
      {
        id: 4,
        name: 'NTL8012 Tall Tap',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        price: 280,
        description:"D120mm x H271mm, Handle H187mm, Dia (Base) 48mm",
        availability: "1 week"
      },
      {
        id: 5,
        name: 'NTL3012 Tall Tap',
        imageUrl: 'https://i.ibb.co/P68Qj09/BC-LKW-K829-Wall-Mount-Vessel-Basin.png',
        price: 160,
        description:"D145mm x H323mm, Spout D130mm, Spout H250mm, Dia (Base) 48mm",
        availability: "1 week"
      },
      {
        id: 6,
        name: 'FFAS0706 Short Tap',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"D118mm x H122mm, Dia (Base) 50mm, Dia (Body) 42mm",
        availability: "1 week"
      },
      {
        id: 7,
        name: 'Pozzi X321 Short Tap',
        imageUrl: 'https://i.ibb.co/QmP74Jr/Grohe-39216000-Vessel-Basin.png',
        price: 160,
        description:"D150mm x H160mm, Spout D120mm, Dia (Base) 60mm, Dia (Body) 40mm",
        availability: "1 week"
      },
      {
        id: 8,
        name: 'FT7101 Short Tap',
        imageUrl: 'https://i.ibb.co/YcvVLfQ/American-Standard-0459-Undermount-Basin.png',
        price: 190,
        description:"",
        availability: "1 week"
      },
      {
        id: 9,
        name: 'NTL8011 Short tap',
        imageUrl: 'https://i.ibb.co/LvPrXCf/American-Standard-F646-Vessel-Basin.png',
        price: 200,
        description:"D120mm x H146mm, Spout H114mm, Dia (Base) 48mm",
        availability: "1 week"
      },
      {
        id: 10,
        name: 'NTL3011 Short Tap',
        imageUrl: 'https://i.ibb.co/Jn8xhF5/LT1059-A-Vessel-Basin.png',
        price: 160,
        description:"D125mm x H173mm, Spout D107mm, Spout H100mm, Dia (Base) 48mm",
        availability: "1 week"
      },
      {
        id: 11,
        name: 'American Standard FFAS1302 Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/KhP4JXS/BC-LKW-K820-Vessel-Basin.png',
        price: 220,
        description:"D175mm x H291mm, Sprout D151mm x H218mm, Dia (Body) 44mm",
        availability: "1 week"
      },
      {
        id: 12,
        name: 'Boshsini BS216BK Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/GCdsYv5/Vitra-5475-B-Undermount-Basin.png',
        price: 280,
        description:"D152mm x H300mm, Sprout D160mm x H227mm, Dia (Base) 50mm, Dia (Body) 42mm",
        availability: "1 week"
      },
      {
        id: 13,
        name: 'Pozzi F921L Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/GWzc6hQ/A470-WB-Vessel-Basin.png',
        price: 110,
        description:"W99mm x D115mm x H320mm, Spout H293mm, (Body) W40mm",
        availability: "1 week"
      },
      {
        id: 14,
        name: 'Gessi 49003 Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        price: 280,
        description:"W41mm x D266mm x H290mm, Spout D217mm, Spout H249mm, Dia (Body) 46mm",
        availability: "1 week"
      },
      {
        id: 15,
        name: 'Gessi 47103 Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/P68Qj09/BC-LKW-K829-Wall-Mount-Vessel-Basin.png',
        price: 160,
        description:"W42mm x D258mm x H224mm, Spout D212mm, Spout H174mm, Dia (Base) 50mm",
        availability: "1 week"
      },
      {
        id: 16,
        name: 'NTL2002 Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"D150mm x H320mm, Spout D136mm, Spout H230mm, Dia (Base) 53mm",
        availability: "1 week"
      },
      {
        id: 17,
        name: 'American Standard FFAS0902 Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/QmP74Jr/Grohe-39216000-Vessel-Basin.png',
        price: 160,
        description:"D210mm x H312mm, Spout D153mm, Spout H238mm, Dia (Body) 48mm",
        availability: "1 week"
      },
      {
        id: 18,
        name: 'Grohe 23406000 Eurocube Tall Mixer Tap',
        imageUrl: 'https://i.ibb.co/YcvVLfQ/American-Standard-0459-Undermount-Basin.png',
        price: 190,
        description:"D200mm x H312mm, Spout D180mm, Spout H247mm",
        availability: "1 week"
      },
      {
        id: 19,
        name: 'American Standard FFAS1301 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/LvPrXCf/American-Standard-F646-Vessel-Basin.png',
        price: 200,
        description:"D145mm x H171mm, Spout D117mm, Spout H99mm, Dia (Body) 44mm",
        availability: "1 week"
      },
      {
        id: 20,
        name: 'Boshsini BS212BK Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/Jn8xhF5/LT1059-A-Vessel-Basin.png',
        price: 160,
        description:"D152mm x H180mm, Spout D110mm, Spout H97mm, Dia (Base) 50mm, Dia (Body) 42mm",
        availability: "1 week"
      },
      {
        id: 21,
        name: 'Pozzi F921 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/KhP4JXS/BC-LKW-K820-Vessel-Basin.png',
        price: 220,
        description:"W99mm x D115mm x H180mm, Spout H153mm, (Body) W40mm",
        availability: "1 week"
      },
      {
        id: 22,
        name: 'Gessi 49001 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/GCdsYv5/Vitra-5475-B-Undermount-Basin.png',
        price: 280,
        description:"W41mm x D178mm x H146mm, Spout D128mm, Spout H100mm, Dia (Body) 46mm",
        availability: "1 week"
      },
      {
        id: 23,
        name: 'Gessi 47105 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/GWzc6hQ/A470-WB-Vessel-Basin.png',
        price: 110,
        description:"W42mm x D176mm x H149mm, Spout D130mm, Spout H100mm, Dia (Base) 50mm",
        availability: "1 week"
      },
      {
        id: 24,
        name: 'NTL2001 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        price: 280,
        description:"D145mm x H190mm, Spout D116mm, Spout H100mm, Dia (Base) 53mm",
        availability: "1 week"
      },
      {
        id: 25,
        name: 'American Standard FFAS0901 Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/P68Qj09/BC-LKW-K829-Wall-Mount-Vessel-Basin.png',
        price: 160,
        description:"D120mm x H155mm, Spout D103mm, Spout H88mm, Dia (Body) 48mm",
        availability: "1 week"
      },
      {
        id: 26,
        name: 'Grohe 23127000 Eurocube Short Mixer Tap',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"D90mm x H157mm, Spout H94mm",
        availability: "1 week"
      },
      {
        id: 27,
        name: 'Luxes VG505 Mixer Tap',
        imageUrl: 'https://i.ibb.co/QmP74Jr/Grohe-39216000-Vessel-Basin.png',
        price: 160,
        description:"D136mm x H185mm, Spout D118.5mm, Spout H99mm, Dia (Base) 35mm",
        availability: "1 week"
      },
      {
        id: 28,
        name: 'NTL2311 Separated Mixer',
        imageUrl: 'https://i.ibb.co/YcvVLfQ/American-Standard-0459-Undermount-Basin.png',
        price: 190,
        description:"Spout D200mm x Spout H246mm x Dia (Base) 53mm, Handle D125mm, Handle H96mm, Dia (Base) 35mm",
        availability: "1 week"
      },
      {
        id: 29,
        name: 'Bravat F83379C',
        imageUrl: 'https://i.ibb.co/LvPrXCf/American-Standard-F646-Vessel-Basin.png',
        price: 200,
        description:"W200mm x H90mm x D198mm, Spout W35mm, Spout H85mm",
        availability: "1 week"
      }
    ]
  },
  {
    id: 5,
    title: 'Home Decorations',
    routeName: 'homedecor',
    items: [
      {
        id: 1,
        name: 'Outdoor PE Rattan Sofa Set',
        imageUrl: 'https://i.ibb.co/pZmvMdQ/Outdoor-PE-Rattan-Sofa-Set.png',
        price: 220,
        description:"Size: Custom",
        availability: "1-2 months"
      },
      {
        id: 2,
        name: 'Synthetic Rattan Hanging Day Bed',
        imageUrl: 'https://i.ibb.co/SP1KGXL/Synthetic-Rattan-Hanging-Day-Bed.png',
        price: 280,
        description:"W1980mm x D1450mm x H572mm",
        availability: "1.5-2 months"
      },
      {
        id: 3,
        name: 'Outdoor Rope Chair',
        imageUrl: 'https://i.ibb.co/y6wYDvh/Outdoor-Rope-Chair.png',
        price: 110,
        description:"Size: Custom",
        availability: "1-2 months"
      },
      {
        id: 4,
        name: 'Outdoor Poly Rope Sofa Set (2-seater)',
        imageUrl: 'https://i.ibb.co/vQTY373/Outdoor-Poly-Rope-Sofa-Set-2-seater.png',
        price: 280,
        description:"W1550mm x D750mm",
        availability: "1.5-2 months"
      },
      {
        id: 5,
        name: 'Outdoor Poly Rope Sofa Set (1-seater)',
        imageUrl: 'https://i.ibb.co/r4t8hc5/Outdoor-Poly-Rope-Sofa-Set-1-seater.png',
        price: 280,
        description:"W72mm x D75mm",
        availability: "1.5-2 months"
      },
      {
        id: 6,
        name: 'Outdoor Poly Rope Sofa Set (coffee table)',
        imageUrl: 'https://i.ibb.co/pzJjG4b/Outdoor-Poly-Rope-Sofa-Set-coffee-table.png',
        price: 280,
        description:"W1200mm x D700mm x H450mm",
        availability: "1.5-2 months"
      },
      {
        id: 7,
        name: 'Outdoor Sofa Set (2-seater)',
        imageUrl: 'https://i.ibb.co/cc8gkV3/Outdoor-Sofa-Sets.png',
        price: 160,
        description:"W1680mm x D830mm",
        availability: "1-2 months"
      },
      {
        id: 8,
        name: 'Balcony 3-Seater Sofa',
        imageUrl: 'https://i.ibb.co/wBMWfvx/BCO4021-Vessel-Basin.png',
        price: 160,
        description:"W2270mm x D880mm x H750mm",
        availability: "1-2 months"
      },
      {
        id: 9,
        name: 'Outdoor Long Sofa',
        imageUrl: 'https://i.ibb.co/1GS8jTG/Outdoor-Long-Sofa.png',
        price: 160,
        description:"W2340mm x D1000mm x H720mm",
        availability: "1.5-2 months"
      },
      {
        id: 10,
        name: 'Outdoor European Sofa 1',
        imageUrl: 'https://i.ibb.co/HzX3Ln6/Outdoor-European-Sofa.png',
        price: 190,
        description:"Size: Custom",
        availability: "2 months"
      },
      {
        id: 11,
        name: 'Outdoor European Sofa 2',
        imageUrl: 'https://i.ibb.co/fr1RvH0/Outdoor-European-Sofa.png',
        price: 200,
        description:"Size: Custom",
        availability: "1-2 months"
      },
      {
        id: 12,
        name: 'Outdoor Rectangle 6-Seater Dining Set (table)',
        imageUrl: 'https://i.ibb.co/tJ8PxH5/Outdoor-Rectangle-6-Seater-Dining-Set-Table.png',
        price: 160,
        description:"H750mm x D850mm x W1500mm",
        availability: "1-2 months"
      },
      {
        id: 13,
        name: 'Outdoor Rectangle 6-Seater Dining Set (chair)',
        imageUrl: 'https://i.ibb.co/RPVfgMv/Outdoor-Rectangle-6-Seater-Dining-Set-Chair-Light-Brown.png',
        price: 160,
        description:"W540mm x D550mm x H860mm",
        availability: "1-2 months"
      },
      {
        id: 14,
        name: 'Outdoor Round 4-Seater Dining Set (table)',
        imageUrl: 'https://i.ibb.co/MkZNJ8C/Outdoor-Round-4-Seater-Dining-Set-Light-Brown-table.png',
        price: 220,
        description:"Dia 800mm x H750mm",
        availability: "1-2 months"
      },
      {
        id: 15,
        name: 'Outdoor Round 4-Seater Dining Set (chair)',
        imageUrl: 'https://i.ibb.co/zbWLdzW/Outdoor-Round-4-Seater-Dining-Set-Chair.png',
        price: 220,
        description:"W570mm x D580mm x H890mm",
        availability: "1-2 months"
      }
    ]
  }
];

export default SHOP_DATA;
