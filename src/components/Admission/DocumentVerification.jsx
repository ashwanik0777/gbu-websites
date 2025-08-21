
import React, { useState } from 'react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Card component
const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-100">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold flex items-center ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Button component
const Button = ({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-gray-300 text-gray-700 bg-white",
    secondary: "bg-gray-200 text-gray-800",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
import { FileText, Download, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DocumentVerification = () => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      applicationId: 'APP2024001',
      course: 'B.Tech CSE',
      documentType: '12th Marksheet',
      status: 'pending',
      submittedDate: '2024-01-15'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      applicationId: 'APP2024002',
      course: 'MBA',
      documentType: 'Graduation Certificate',
      status: 'pending',
      submittedDate: '2024-01-14'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      applicationId: 'APP2024003',
      course: 'M.Tech CSE',
      documentType: 'Experience Certificate',
      status: 'pending',
      submittedDate: '2024-01-13'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      applicationId: 'APP2024004',
      course: 'B.Sc Physics',
      documentType: 'Identity Proof',
      status: 'approved',
      submittedDate: '2024-01-12'
    },
    {
      id: 5,
      studentName: 'David Brown',
      applicationId: 'APP2024005',
      course: 'MBA',
      documentType: 'Work Experience',
      status: 'rejected',
      submittedDate: '2024-01-11'
    }
  ]);

  const updateDocumentStatus = (id, status) => {
    setDocuments(prev => 
      prev.map(doc => 
        doc.id === id ? { ...doc, status } : doc
      )
    );
    toast({
      title: `Document ${status}`,
      description: `Document has been ${status} successfully.`,
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-orange-600 border-orange-200">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-200">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const pendingDocuments = documents.filter(doc => doc.status === 'pending');

  return (
    <SearchableWrapper>
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Document Verification Queue</span>
            <Badge variant="secondary">{pendingDocuments.length} pending</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-medium">{doc.studentName}</h3>
                      <span className="text-sm text-gray-500">{doc.applicationId}</span>
                      <Badge variant="outline">{doc.course}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{doc.documentType}</span>
                      <span>•</span>
                      <span>Submitted: {doc.submittedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(doc.status)}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Button size="sm" variant="outline" className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>View</span>
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                  
                  {doc.status === 'pending' && (
                    <>
                      <Button 
                        size="sm" 
                        className="flex items-center space-x-1 bg-green-600 hover:bg-green-700"
                        onClick={() => updateDocumentStatus(doc.id, 'approved')}
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>Approve</span>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        className="flex items-center space-x-1"
                        onClick={() => updateDocumentStatus(doc.id, 'rejected')}
                      >
                        <XCircle className="h-4 w-4" />
                        <span>Reject</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default DocumentVerification;
