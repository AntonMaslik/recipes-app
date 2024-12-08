import { useAuth } from "contexts/AuthContext";
import { NotFound } from "@components/pages/NotFoundPage"

export const PrivateRoute: React.FC<{ component: React.FC }> = ({ component: Component }) => {
    
    const { user } = useAuth();

    if(user){
        return <Component />;
    }
    return <NotFound />
};