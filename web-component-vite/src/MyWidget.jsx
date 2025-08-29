import React from 'react'

export default function MyWidget({ name }) {
    return (
        <div className="my-widget">
            <h3>Olá, {name || 'Mundo'}</h3>
            <p>Componente React empacotado como Web Component.</p>
        </div>
    )
}