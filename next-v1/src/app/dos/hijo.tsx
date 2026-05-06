// Hijo.tsx
import { ReactNode } from "react";

type HijoProps = {
    children: ReactNode;
};

export default function Hijo({ children }: HijoProps) {
    return (
        <div>
            Este es mi hijo {children}
        </div>
    );
}