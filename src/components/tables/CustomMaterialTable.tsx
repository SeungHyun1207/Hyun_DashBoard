// MaterialTable (테이블)

import { Box } from '@mui/material';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_PaginationState,
  MRT_RowData,
  MRT_TableOptions,
} from 'material-react-table';
import React from 'react';

interface CustomMaterialTableProps<T extends MRT_RowData>
  extends MRT_TableOptions<T> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  isFetching?: boolean;
  isError?: boolean;
  hasPagination?: boolean;
  pagination?: MRT_PaginationState;
  setPagination?: React.Dispatch<React.SetStateAction<MRT_PaginationState>>;
  total?: number;
  totalPageCount?: number;
}

const CustomMaterialTable = <T extends MRT_RowData>(
  props: CustomMaterialTableProps<T>
) => {
  return (
    <MaterialReactTable
      columns={props.columns}
      data={props.data ?? []}
      rowCount={props.total ?? 0}
      enableStickyHeader
      enableColumnActions={false}
      enableColumnFilterModes={false}
      enableSorting={false}
      enableTopToolbar={false}
      layoutMode={'grid'}
      enableExpandAll={false}
      paginationDisplayMode="pages"
      manualPagination
      muiPaginationProps={{
        showRowsPerPage: false,
      }}
      muiTableHeadCellProps={
        {
          // sx : MRTDefaultStyles.muiTableHeadCellCss(),
        }
      }
      muiTableContainerProps={{
        sx: {
          maxHeight: 'none',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      muiTableBodyCellProps={
        {
          // sx : MRTDefaultStyles.muiTableBodyCellCss(),
        }
      }
      muiTableBodyRowProps={() =>
        props.data &&
        {
          // sx : MRTDefaultStyles.muiTableBodyRowCss(),
        }
      }
      muiDetailPanelProps={
        {
          // sx: () => MRTDefaultStyles.muiDetailPanelCss,
        }
      }
      muiTableBodyProps={{
        children: props.isError ? (
          // <TableFallback />
          <Box>서버 오류가 발생했습니다.</Box>
        ) : props.data === undefined || props.isFetching ? (
          <Box sx={{ py: '150px' }}></Box>
        ) : null,
      }}
      renderEmptyRowsFallback={() => {
        if (props.total === 0) {
          return <Box>검색 결과가 없습니다.</Box>;
        } else if (props.total === undefined) {
          return <Box></Box>;
        }
      }}
      autoResetExpanded={true}
    />
  );
};

export default CustomMaterialTable;
