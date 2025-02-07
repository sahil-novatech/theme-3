'use client'
import { globalServices } from "@/services/global.services";
import { Config } from "@/src/types/configuration";
import { UserProfile } from "@/src/types/user";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useLoginModalContext } from "./LoginModalContext";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type GlobalContextType = {
  configuration: Config;
  isDropdownOpen: boolean;
  setIsDropdownOpen: SetState<boolean>;
  hasToken: {} | undefined;
  user: UserProfile | null;
  setUser: SetState<UserProfile | null>;
  setHasToken: SetState<string | boolean>
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

async function fetchConfiguration() {
  // const res = await globalServices.getAll(`/configuration`)
  // if(res.data.status === 200) {
  //   return res.data.data
  // } else {
  //   return res
  // }
  const res = {
    "siteSettings": {
        "logo": "logo.png",
        "favicon": "favicon.png",
        "primary_color": "#000000",
        "secondary_color": "#ffffff",
        "default_currency": "CAD",
        "default_language": "en",
        "default_timezone": "CST",
        "default_country": "CA",
        "default_city": "Toronto",
        "default_user_id": 1
    },
    "website": {
        "id": "2",
        "agent_name": "John Doe",
        "address": "Hazelhurst Road, Mississauga, ON L5J 4T8",
        "phone": "+918460937300",
        "email": "johndoe@example.com",
        "facebook_url": "https://www.facebook.com/johndoe",
        "instagram_url": "https://www.instagram.com/johndoe",
        "live_date": "2025-02-10T00:00:00.000000Z",
        "status": "Inactive",
        "logo": "https://s3.ca-central-1.amazonaws.com/mls-trreb/17/website/logo.png",
        "favicon": "https://s3.ca-central-1.amazonaws.com/mls-trreb/17/website/logo.png",
        "footer_logo": "https://s3.ca-central-1.amazonaws.com/mls-trreb/17/website/logo.png",
        "domain": "https://www.xyz.com",
        "created_at": "2025-01-25T15:16:39.000000Z",
        "updated_at": "2025-02-05T10:57:56.000000Z"
    },
    "header": {
        "menu": {
            "buy": {
                "title": "Buy",
                "url": "/buy",
                "subMenu": [
                    {
                        "title": "Real Estate toronto",
                        "url": "/property?city=toronto&transactionType=For Sale"
                    },
                    {
                        "title": "House for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&propertyType=house"
                    },
                    {
                        "title": "Condos for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&propertyType=condo"
                    },
                    {
                        "title": "Townhouses for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&propertyType=townhouse"
                    },
                    {
                        "title": "Commercial Real Estate",
                        "url": "/property?city=toronto&transactionType=For Sale&propertyType=commercial"
                    }
                ]
            },
            "rent": {
                "title": "Rent",
                "url": "/rent",
                "subMenu": [
                    {
                        "title": "Real Estate toronto",
                        "url": "/property?city=toronto&transactionType=For Lease"
                    },
                    {
                        "title": "House for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=house"
                    },
                    {
                        "title": "Condos for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=condo"
                    },
                    {
                        "title": "Townhouses for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=townhouse"
                    },
                    {
                        "title": "Commercial Real Estate",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=commercial"
                    }
                ]
            },
            "sell": {
                "title": "Sell",
                "url": "#"
            },
            "blogs": {
                "title": "Blogs",
                "url": "/blogs"
            }
        }
    },
    "preDefinedSearches": {
        "buy": {
            "title": "Buy",
            "searches": {
                "PropertyType": [
                    {
                        "title": "Houses",
                        "url": "/property?city=toronto&transactionType=For Sale"
                    },
                    {
                        "title": "Condos",
                        "url": "/property?city=toronto&propertyType=condo&transactionType=For Sale"
                    },
                    {
                        "title": "Townhouses",
                        "url": "/property?city=toronto&propertyType=townhouse&transactionType=For Sale"
                    },
                    {
                        "title": "Commercial Real Estate",
                        "url": "/property?city=toronto&propertyType=commercial&transactionType=For Sale"
                    }
                ],
                "Bedrooms": [
                    {
                        "title": "toronto 1 Bedroom Apartments for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&bedrooms=1"
                    },
                    {
                        "title": "toronto 2 Bedroom Apartments for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&bedrooms=2"
                    },
                    {
                        "title": "toronto 3 Bedroom Apartments for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&bedrooms=3"
                    },
                    {
                        "title": "toronto 4 Bedroom Apartments for Sale",
                        "url": "/property?city=toronto&transactionType=For Sale&bedrooms=4"
                    }
                ],
                "Neighborhoods": [
                    {
                        "title": "ON Real Estate",
                        "url": "/property?city=toronto&neighborhood=ON&transactionType=For Sale"
                    },
                    {
                        "title": "Erindale Real Estate",
                        "url": "/property?city=toronto&neighborhood=Erindale&transactionType=For Sale"
                    },
                    {
                        "title": "Mineola Real Estate",
                        "url": "/property?city=toronto&neighborhood=Mineola&transactionType=For Sale"
                    },
                    {
                        "title": "Lakeview Real Estate",
                        "url": "/property?city=toronto&neighborhood=Lakeview&transactionType=For Sale"
                    }
                ],
                "NearbyCities": [
                    {
                        "title": "Oakville Real Estate",
                        "url": "/property?city=Oakville&transactionType=For Sale"
                    },
                    {
                        "title": "Mississauga Real Estate",
                        "url": "/property?city=Mississauga&transactionType=For Sale"
                    },
                    {
                        "title": "Milton Real Estate",
                        "url": "/property?city=Milton&transactionType=For Sale"
                    },
                    {
                        "title": "Burlington Real Estate",
                        "url": "/property?city=Burlington&transactionType=For Sale"
                    }
                ],
                "PopularCities": [
                    {
                        "title": "Oakville Real Estate",
                        "url": "/property?city=oakville&transactionType=For Sale"
                    },
                    {
                        "title": "Mississauga Real Estate",
                        "url": "/property?city=mississauga&transactionType=For Sale"
                    },
                    {
                        "title": "Milton Real Estate",
                        "url": "/property?city=milton&transactionType=For Sale"
                    },
                    {
                        "title": "Burlington Real Estate",
                        "url": "/property?city=burlington&transactionType=For Sale"
                    }
                ]
            }
        },
        "rent": {
            "title": "Rent",
            "searches": {
                "PropertyType": [
                    {
                        "title": "Houses",
                        "url": "/property?city=toronto&transactionType=For Lease"
                    },
                    {
                        "title": "Condos",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=condo"
                    },
                    {
                        "title": "Townhouses",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=townhouse"
                    },
                    {
                        "title": "Commercial Real Estate",
                        "url": "/property?city=toronto&transactionType=For Lease&propertyType=commercial"
                    }
                ],
                "Bedrooms": [
                    {
                        "title": "toronto 1 Bedroom Apartments for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&bedrooms=1"
                    },
                    {
                        "title": "toronto 2 Bedroom Apartments for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&bedrooms=2"
                    },
                    {
                        "title": "toronto 3 Bedroom Apartments for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&bedrooms=3"
                    },
                    {
                        "title": "toronto 4 Bedroom Apartments for Rent",
                        "url": "/property?city=toronto&transactionType=For Lease&bedrooms=4"
                    }
                ],
                "Neighborhoods": [
                    {
                        "title": "ON Real Estate",
                        "url": "/property?city=toronto&neighborhood=ON&transactionType=For Lease"
                    },
                    {
                        "title": "Erindale Real Estate",
                        "url": "/property?city=toronto&neighborhood=Erindale&transactionType=For Lease"
                    },
                    {
                        "title": "Mineola Real Estate",
                        "url": "/property?city=toronto&neighborhood=Mineola&transactionType=For Lease"
                    },
                    {
                        "title": "Lakeview Real Estate",
                        "url": "/property?city=toronto&neighborhood=Lakeview&transactionType=For Lease"
                    }
                ],
                "NearbyCities": [
                    {
                        "title": "Oakville Real Estate",
                        "url": "/property?city=Oakville&transactionType=For Lease"
                    },
                    {
                        "title": "Mississauga Real Estate",
                        "url": "/property?city=Mississauga&transactionType=For Lease"
                    },
                    {
                        "title": "Milton Real Estate",
                        "url": "/property?city=Milton&transactionType=For Lease"
                    },
                    {
                        "title": "Burlington Real Estate",
                        "url": "/property?city=Burlington&transactionType=For Lease"
                    }
                ],
                "PopularCities": [
                    {
                        "title": "Oakville Real Estate",
                        "url": "/property?city=Oakville&transactionType=For Lease"
                    },
                    {
                        "title": "Mississauga Real Estate",
                        "url": "/property?city=Mississauga&transactionType=For Lease"
                    },
                    {
                        "title": "Milton Real Estate",
                        "url": "/property?city=Milton&transactionType=For Lease"
                    },
                    {
                        "title": "Burlington Real Estate",
                        "url": "/property?city=Burlington&transactionType=For Lease"
                    }
                ]
            }
        }
    },
    "popularCities": [
        {
            "title": "Toronto",
            "url": "/property?city=toronto"
        },
        {
            "title": "Mississauga",
            "url": "/property?city=mississauga"
        },
        {
            "title": "Brampton",
            "url": "/property?city=brampton"
        },
        {
            "title": "Hamilton",
            "url": "/property?city=hamilton"
        },
        {
            "title": "Vaughan",
            "url": "/property?city=vaughan"
        },
        {
            "title": "Markham",
            "url": "/property?city=markham"
        },
        {
            "title": "Oakville",
            "url": "/property?city=oakville"
        },
        {
            "title": "London",
            "url": "/property?city=london"
        },
        {
            "title": "Richmond Hill",
            "url": "/property?city=richmond hill"
        },
        {
            "title": "Barrie",
            "url": "/property?city=barrie"
        }
    ]
}
return res;
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [hasToken, setHasToken] = useState<string | boolean>('');
  const [configuration, setConfiguration] = useState({
    siteSettings: {
      logo: "",
      favicon: "",
      primary_color: "",
      secondary_color: "",
      default_currency: "",
      default_language: "",
      default_timezone: "",
      default_country: "",
      default_city: "",
    },
    header: {
      menu: {},
    },
    preDefinedSearches: {},
    popularCities: [
        {
            title: '',
            url: ''
        }
    ],
    website: {
      id: "",
      agent_name: "",
      email: "",
      phone: "",
      address: "",
      domain: "",
      facebook_url: "",
      instagram_url: "",
      logo: "",
      favicon: "",
      footer_logo: "",
      status: "",
      created_at: "",
      updated_at: "",
      live_date: ""
    }
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const { onMetaOpen } = useLoginModalContext();

  useEffect(() => {
    if(typeof localStorage !== 'undefined'){
      const authToken = localStorage.getItem('token');
      setHasToken(!!authToken);
      if(authToken){
        globalServices.getAll('/get-profile').then((res) => {
          if(res.status === 200){
            setHasToken(true);
            setUser(res.data.data.user);
            if(!res.data.data.user.customer_meta_filled){
              onMetaOpen();
            }
          }
        }).catch((err) => {
          setHasToken(false);
          localStorage.clear();
        })
      }else{
        setHasToken(false);
      }
    }
  }, []);

  const configurationData = useQuery({
    queryKey: ['configuration'],
    queryFn: fetchConfiguration,
    staleTime: 1000 * 60 * 5,
  })

  useEffect(() => {
    if(configurationData?.data){
      setConfiguration(configurationData.data);
    }
  }, [configurationData?.data])

  return (
    <GlobalContext.Provider value={{ configuration, isDropdownOpen, setIsDropdownOpen, hasToken, user, setUser, setHasToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};