import React from 'react'

const data = [6, 5, 2, 4.5, 1.5, 2.5, 2, 2.5, 1.5, 2.5, 3.5, 7]

const style = `
.snowfall {
    align-items: flex-end;
    display: flex;
    justify-content: center
}

.snowfall-bar {
    background-color: var(--fg);
    flex-basis: 0;
    flex-grow: 1;
    margin: calc(.125em + .125ex)
}`;

export const Chart = (props) => (
    <div className="snowfall">
        <style>{style}</style>
        {data.map((d, i) => (
            <div
                /* eslint-disable-next-line react/no-array-index-key */
                key={i}
                className="snowfall-bar"
                style={{
                    height: 'calc(' + d + ' * 0.5 * (1em + 1ex))',
                    backgroundColor: props.color
                }}
            />
        ))}
    </div>
)
