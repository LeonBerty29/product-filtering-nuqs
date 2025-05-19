"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductsPaginationProps {
  refetchProducts: () => Promise<void>;
}

export function ProductsPagination({
  refetchProducts,
}: ProductsPaginationProps) {
  const [offset, setOffset] = useQueryState(
    "offset",
    parseAsInteger.withDefault(1)
  );

  const handleOffsetChange = (value: number) => {
    setOffset(value);

    document.querySelector("main")?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <Pagination>
      <PaginationContent>
        {offset > 1 && (
          <>
            <PaginationItem>
              <Button
                variant={"outline"}
                onClick={() => handleOffsetChange(offset - 1)}
              >
                <ChevronLeft className="size-4" />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant={"outline"}
                onClick={() => handleOffsetChange(offset - 1)}
              >
                {offset - 1}
              </Button>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <Button variant={"outline"} disabled>
            {offset}
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant={"outline"}
            onClick={() => handleOffsetChange(offset + 1)}
          >
            {offset + 1}
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
