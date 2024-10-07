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
import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type User = {
  id: string;
  item: string;
  price: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'item',
    header: 'Item',
  },
  {
    accessorKey: 'price',
    header: 'Preço',
  },
];

export const User = () => {
  const info = useQuery({
    queryKey: ['get-all-user'],
    queryFn: () => userService.all(),
  });
  console.log(info);
  return (
    <ContentLayout title="Usuário">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/"> Home </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Usuário</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none p-4 mt-6">
        <DataTable
          columns={columns}
          data={info?.data?.data.data.purchases || []}
        />
      </Card>
    </ContentLayout>
  );
};
