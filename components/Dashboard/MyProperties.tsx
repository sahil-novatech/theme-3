'use client';
import { globalServices } from "@/services/global.services";
import { HomeDataRes, ImageData } from "@/src/types/propertyCard";
import { Badge, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { BiPencil, BiTrash } from "react-icons/bi";

async function fetchProperties() {
  const res = await globalServices.getAll(`/properties?limit=8`)
  if (res.status === 200 && res.data.data) {
    const propertyData = res.data.data.length > 0 ? res.data.data.map((data: HomeDataRes) => ({
      title: data.CityRegion ?? data.City ?? "",
      sqft: data.LivingAreaRange ?? 0,
      beds: data.BedroomsTotal ?? 0,
      baths: data.BathroomsTotalInteger ?? 0,
      images: data.images?.length > 0 ? data.images.map((image: ImageData) => image.image_url) : [],
      address: data.UnparsedAddress,
      price: (data.ListPrice ?? 0).toLocaleString("en-US"),
      listingKey: data.ListingKey,
      transactionType: data.TransactionType ?? "",
      isFavorite: data.is_favorite ?? false,
    })) : []
    return ({
      data: {
        ...res.data,
        data: propertyData,
        meta: res.data.meta
      },
    });
  } else {
    return res
  }
}

export default function MyProperties() {
  const properties = useQuery({
    queryKey: ['excludedQueryKey'],
    queryFn: () => fetchProperties(),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div>
      <div className="mt-[31px] mb-[5px] text-[26px] leading-[36px] font-semibold">
        My Properties
      </div>
      <div className="text-[#3d3e3f] mb-[33px]">
        We are glad to see you again!
      </div>

      <Table
        style={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>Listing Title</TableColumn>
          <TableColumn>Expiry</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>View</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {properties.data && Array.isArray(properties.data) && properties.data.length > 0 ? properties.data.map((property) => (
            <TableRow key={property.id}>
              <TableCell>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    style={{ width: 80, height: 80, borderRadius: "8px" }}
                  />
                  <div>
                    <div style={{ color: "red", fontWeight: "bold" }}>
                      {property.price}
                    </div>
                    <div style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                      {property.title}
                    </div>
                    <div style={{ color: "gray" }}>{property.address}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{property.expiry}</TableCell>
              <TableCell>
                <Badge color="success" variant="flat">
                  {property.status}
                </Badge>
              </TableCell>
              <TableCell>{property.views}</TableCell>
              <TableCell>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <BiPencil />
                  <BiTrash />
                </div>
              </TableCell>
            </TableRow>
          )) : 
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </div>
  )
}