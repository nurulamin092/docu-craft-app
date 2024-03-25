import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/doc-utils';
import React from 'react';

const AuthorPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const matchedAuthor = getDocumentsByAuthor(docs, name)
    return (
        <ContentDisplay id={matchedAuthor[0].id} />
    );
};

export default AuthorPage;