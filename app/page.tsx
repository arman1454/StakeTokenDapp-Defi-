import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import TokenStatus from "@/components/TokenStatus";
import Wallet from "@/components/Wallet";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <TokenStatus />
      {/* <Wallet /> */}
    </MaxWidthWrapper>
  );
}
