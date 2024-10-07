import { DataTable } from '@/components/lib/data-table';
import { ContentLayout } from '@/components/panel/content-layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import { adminService } from '@/services/admin.service';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type Admin = {
  id: string;
  status: 'Pending' | 'Completed';
  title: string;
};

export const columns: ColumnDef<Admin>[] = [
  {
    accessorKey: 'status',
    header: 'Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

export const Admin = () => {
  const info = useQuery({
    queryKey: ['get-all-admin'],
    queryFn: () => adminService.all(),
  });

  return (
    <ContentLayout title="Administrador">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/"> Home </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Administrador</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none p-4 mt-6">
        <DataTable
          columns={columns}
          data={info?.data?.data?.data?.reports || []}
        />
      </Card>
    </ContentLayout>
  );
};
