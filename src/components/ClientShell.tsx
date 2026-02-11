"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AuthModal } from "@/components/AuthModal";

export function ClientShell({ children }: { children: React.ReactNode }) {
    // Global action handler for "Get Started" or "Buy Template"
    const handleAction = () => {
        // This can be expanded to open a global modal or redirect
        console.log("Action triggered");
    };

    return (
        <AuthProvider>
            <CartProvider>
                <Header onBuyTemplate={handleAction} />
                <main>{children}</main>
                <Footer onBuyTemplate={handleAction} />
                <CartDrawer />
                <AuthModal />
            </CartProvider>
        </AuthProvider>
    );
}
