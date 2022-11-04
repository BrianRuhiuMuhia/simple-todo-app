export default function Footer()
{
    const date=new Date()
    return(
        <footer className="footer">
            <div className='wrapper'>
                <h1>&copy;{date.getFullYear()}</h1>
            </div>
        </footer>
    )
}