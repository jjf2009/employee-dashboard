import type { LeaveRequest } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeaveStatusBadge } from "@/components/dashboard/LeaveStatusBadge";
import { formatDate } from "@/utils/format";

interface LeaveTableProps {
  requests: LeaveRequest[];
}

const typeLabels: Record<LeaveRequest["type"], string> = {
  annual: "Annual",
  sick: "Sick",
  personal: "Personal",
};

export function LeaveTable({ requests }: LeaveTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Days</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">
                  {typeLabels[request.type]}
                </TableCell>
                <TableCell>
                  {formatDate(request.startDate)}
                  {request.startDate !== request.endDate &&
                    ` – ${formatDate(request.endDate)}`}
                </TableCell>
                <TableCell>{request.days}</TableCell>
                <TableCell>
                  <LeaveStatusBadge status={request.status} />
                </TableCell>
                <TableCell className="max-w-[200px] truncate text-muted-foreground">
                  {request.reason}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDate(request.submittedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
