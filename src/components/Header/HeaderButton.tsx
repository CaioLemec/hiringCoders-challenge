import { useHistory, matchPath, useRouteMatch } from 'react-router-dom';

interface HeaderButtonProps {
    title: string;
    redirect: string;
}

export function HeaderButton(props: HeaderButtonProps) {
    const history = useHistory();

    function handleRedirectToRegister () {
        history.push(`${props.redirect}`)
    }


    return (
        <button type="button" onClick={handleRedirectToRegister}>{props.title}</button>
    );
}

function useRouter(): { location: any; } {
    throw new Error('Function not implemented.');
}
