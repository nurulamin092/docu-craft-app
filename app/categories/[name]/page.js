import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategories } from "@/utils/doc-utils";

const CategoriesPage = ({ params: { name } }) => {

    const docs = getDocuments();
    const matchedDoc = getDocumentsByCategories(docs, name)
    return (
        <ContentDisplay id={matchedDoc[0].id} />
    );
};

export default CategoriesPage;