import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import EditorialSection from "@/components/sections/EditorialSection";
import ExperienceGallery from "@/components/sections/ExperienceGallery";
import MenuHighlights from "@/components/sections/MenuHighlights";
import PremiumHero from "@/components/sections/PremiumHero";
import SignatureMoments from "@/components/sections/SignatureMoments";
import SocialProof from "@/components/sections/SocialProof";
import VisitSection from "@/components/sections/VisitSection";
import VipLounge from "@/components/sections/VipLounge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="overflow-hidden">
        <PremiumHero />
        <EditorialSection />
        <SignatureMoments />
        <MenuHighlights />
        <ExperienceGallery />
        <VipLounge />
        <SocialProof />
        <VisitSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
