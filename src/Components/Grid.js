import AgGrid from './AgGrid';

const Grid = (props) => {
    return (
        <>
        <div>
            <h1>This is Grid</h1>
            <AgGrid action={props.action}/>
        </div>
        </>
    )
}

export default Grid;
/*
Like In this 2 Actions are there,
Check which one the user has selected
that can be done with props and props can be passed directly
and with the help of that prop, we will get the data from that proper api

*/