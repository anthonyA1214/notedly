import { getPageItems } from "@/lib/services/sidenav";
import PageItemsList from "@/components/notes/page-items-list";

export default async function PageItemsListServer() {
  const items = await getPageItems();
  return <PageItemsList items={items} />;
}
