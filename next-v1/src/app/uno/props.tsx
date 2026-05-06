// Props.tsx
type PropsComponentProps = {
    nombre: string;
};

export default function Props({ nombre }: PropsComponentProps) {
    return (
        <div>
            {nombre}
        </div>
    );
}