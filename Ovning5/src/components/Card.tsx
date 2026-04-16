import type { ReactNode } from "react";

interface CardProps {
    title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {children}
        </div>
    );
}
export default Card;
