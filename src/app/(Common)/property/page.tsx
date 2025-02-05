import PropertyHead from "@/components/Property/PropertyHead";
import PropertySection from "@/components/Property/PropertySection";

export default function Property() {
  return (
    <>
      <PropertyHead />
      <div className="flex flex-col gap-8 ps-[30px] pe-[30px]">
        {/* <FilterForm /> */}
        <PropertySection />
      </div>
    </>
  )
}