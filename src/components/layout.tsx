
interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;
