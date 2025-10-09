import styles from './NotesPage.module.css';
import { fetchNotes } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NotesClient from './Notes.client';

interface notesProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Notes({ params }: notesProps) {
  
  const queryClient = new QueryClient();
  const { slug } = await params;
  const [tag] = slug;

  const noteTag = tag === 'All' ? undefined : tag;

  const searchValue: string = '';
  const currentPage: number = 1;
  

  await queryClient.prefetchQuery({
    queryKey: ['notesList', searchValue, currentPage, noteTag],
    queryFn: () => fetchNotes(searchValue, currentPage, noteTag),
  });

  return (
    <div className={styles.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient noteTag={noteTag } />
      </HydrationBoundary>
    </div>
  );
}
