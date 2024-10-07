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
import { Link } from 'react-router-dom';

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
      <Card className="rounded-lg border-none p-4 mt-6"></Card>
    </ContentLayout>
  );
};
