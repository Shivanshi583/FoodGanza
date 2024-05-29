import React from "react";
import ReactDOM from "react-dom/client";
const Heading=()=>{
    return(
        <div className="header">
    <div>
        <img  className="logo" src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"/>
    </div>
    <div className="nav-items">
  <ul>
    <li>Home</li>
        <li>About us</li>
    <li>Contact us</li>
    <li>Cart</li>

  </ul>
    </div>
    </div>
    );
}

const resObj={
  
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
              "title": "What's on your mind?",
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 16,
                  "bottom": 4
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 10,
              "horizontalScrollEnabled": true,
              "itemSpacing": 24,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 8,
                  "top": 8,
                  "right": 12,
                  "bottom": 4
                }
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "750580",
                  "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    "text": "pizzas",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for pizza",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750592",
                  "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    "text": "Biryani",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for biryani",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "762797",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                    "text": "Burgers",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for burger",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750230",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                    "text": "Samosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for samosa",
                    "altTextCta": "open"
                  },
                  "entityId": "80397",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750223",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    "text": "Rolls",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for roll",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750249",
                  "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                    "text": "Shawarma",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for shawarma",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749769",
                  "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                    "text": "Momos",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for momos",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750588",
                  "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                    "text": "Chinese",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chinese",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750235",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                    "text": "Sandwich",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for sandwich",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749874",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    "text": "Cakes",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for cakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749791",
                  "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                    "text": "Pakoda",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pakoda",
                    "altTextCta": "open"
                  },
                  "entityId": "80470",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750132",
                  "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    "text": "Dosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dosa",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750207",
                  "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    "text": "Pasta",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pasta",
                    "altTextCta": "open"
                  },
                  "entityId": "80480",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749774",
                  "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    "text": "Noodles",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for noodles",
                    "altTextCta": "open"
                  },
                  "entityId": "80464",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750584",
                  "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                    "text": "South Indian",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for south indian",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750239",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                    "text": "Shake",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for shakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750226",
                  "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                    "text": "Salad",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for salad",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750638",
                  "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                    "text": "Juice",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for juice",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750599",
                  "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                    "text": "Coffee",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for coffee",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750572",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                    "text": "Pure Veg",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for veg",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                  "frequencyCapping": {
                    
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.2941,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.2444,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "whats_on_your_mind",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "750580",
                    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                      "text": "pizzas",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for pizza",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750592",
                    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      "text": "Biryani",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for biryani",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "762797",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                      "text": "Burgers",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for burger",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750230",
                    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                      "text": "Samosa",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for samosa",
                      "altTextCta": "open"
                    },
                    "entityId": "80397",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750223",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                      "text": "Rolls",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for roll",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750249",
                    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                      "text": "Shawarma",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for shawarma",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749769",
                    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                      "text": "Momos",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for momos",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750588",
                    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                      "text": "Chinese",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for chinese",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750235",
                    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                      "text": "Sandwich",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for sandwich",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749874",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                      "text": "Cakes",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for cakes",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749791",
                    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                      "text": "Pakoda",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for pakoda",
                      "altTextCta": "open"
                    },
                    "entityId": "80470",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750132",
                    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                      "text": "Dosa",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for dosa",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750207",
                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                      "text": "Pasta",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for pasta",
                      "altTextCta": "open"
                    },
                    "entityId": "80480",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749774",
                    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                      "text": "Noodles",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for noodles",
                      "altTextCta": "open"
                    },
                    "entityId": "80464",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750584",
                    "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                      "text": "South Indian",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for south indian",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750239",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                      "text": "Shake",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for shakes",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750226",
                    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                      "text": "Salad",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for salad",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750638",
                    "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                      "text": "Juice",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for juice",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750599",
                    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                      "text": "Coffee",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for coffee",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750572",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                      "text": "Pure Veg",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for veg",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                    "frequencyCapping": {
                      
                    }
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.2941,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.2444,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            }
          }
        

const RestrauntCard=(props)=>{
    console.log(props.restraunts.name)
    return(
        <>
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wvjsuvqrd6ahqqyhmnrt"/>
                        <h3>{props.restraunts.name}</h3>
<h4>Biryani ,North indian</h4>   
<h4>4.4 stars</h4>                        
<h4>36 minutes</h4>                        


        </div>
       
        
        </>
    )
}
const Body =()=>{
    return(
    <div className="body">
        <div className="search-container">
            Serach
        </div>
        <div className="restraunt-container">
      <RestrauntCard resData={resObj}/>
            <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>

        </div>
    </div>
    );
}

const MainApp=()=>{
    return(
        <div className="app">
     <Heading/>
     <Body/>
     </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp/>);
