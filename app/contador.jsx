import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const subtrair = () => {
        setContador(contador - 1);
    };

    const somar = () => {
        setContador(contador + 1);
    };

    const resetar = () => {
        setContador(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#4CAF50' }}>Contador</h1>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>Valor atual: <strong>{contador}</strong></p>
            <div>
                <button
                    onClick={subtrair}
                    style={{
                        margin: '5px',
                        padding: '10px 20px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Subtrair
                </button>
                <button
                    onClick={somar}
                    style={{
                        margin: '5px',
                        padding: '10px 20px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Somar
                </button>
                <button
                    onClick={resetar}
                    style={{
                        margin: '5px',
                        padding: '10px 20px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Resetar
                </button>
            </div>
        </div>
    );
};

export default Contador;