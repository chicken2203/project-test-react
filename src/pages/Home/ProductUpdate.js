import Navigations from '~/components/ShareComponents/Navigations';
import withAuth from '~/components/api/withAuth';

function ProductUpdate() {
    return (
        <div className="home">
            <Navigations />
        </div>
    );
}

export default withAuth(ProductUpdate);
