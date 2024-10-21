import { Pagination, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis, PaginationContent } from "@/components/ui/pagination";

const renderPagination = (
  totalPages: number,
  currentPage: number,
  categoryParam: string = ""
) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  // 何故かページパラメータがあると文字列になるため数値に変換
  const currentPageNumber = Number(currentPage);

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1) ||
      totalPages <= maxVisiblePages
    ) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={`/blog?${categoryParam}page=${i}`}
            isActive={currentPageNumber === i}
            className={currentPageNumber === i ? "pointer-events-none" : ""}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    } else if (
      (i === currentPage - 2 && currentPage > 3) ||
      (i === currentPage + 2 && currentPage < totalPages - 2)
    ) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
  }

  return (
    <Pagination className="my-4">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/blog?${categoryParam}page=${currentPageNumber - 1}`}
            />
          </PaginationItem>
        )}
        {pageNumbers}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/blog?${categoryParam}page=${currentPageNumber + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default renderPagination;
