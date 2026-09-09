import { useState, useEffect } from 'react';

function Relogio() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        console.log('Relógio montado - Intervalo lidago');

        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            console.log('Relógio desmontado');
            clearInterval(interval);
        }
    }, []);

    return (
        <span className="font-mono text-emerald-400 text-sm bg-slate-00 px-3 py-1 rouded-lg">
            {hora}
        </span>
    );
}

export default Relogio;