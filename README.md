This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DEMO - Render props

### Render props with prop

```
<Toggle
    render={({ on, toggle }) => (
        <div>
            {on && <p>Some text</p>}
            <button onClick={toggle}> Show/Hide </button>
        </div>
    )}
/>
```

### Children render props

```
<ToggleChildren>
    {({ on, toggle }) => (
        <div>
            {on && <p>Some text</p>}
            <button onClick={toggle}> Show/Hide </button>
        </div>
    )}
</ToggleChildren>
```
