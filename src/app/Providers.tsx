import { ReactNode } from "react";

import { CurtainProvider } from "@/components/Curtain/CurtainProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageReveal from "@/components/Curtain/PageReveal";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <CurtainProvider>
            <PageReveal>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </PageReveal>
        </CurtainProvider>
    );
};

export default Providers;
