import AdminLayout from '../../src/components/AdminLayout';
import HandleArticle from '../../src/components/HandleArticle';

export default function WriteArticle() {
	return <HandleArticle />;
}

WriteArticle.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
