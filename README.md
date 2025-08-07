# HOMEiFY - Full-Stack Rental Property Management Platform

A comprehensive rental property management application built with modern web technologies, featuring separate dashboards for property managers and tenants with real-time property search, application management.

## Live Demo

[View Live Application](https://main.d2c0sqt60d3ygh.amplifyapp.com/)


##  Features

### For Property Managers
- **Property Management**: Create, edit, and manage rental properties with detailed information
- **Application Review**: Review tenant applications with approve/deny functionality

### For Tenants
- **Advanced Property Search**: Search properties with location-based filtering using Mapbox integration
- **Interactive Maps**: View properties on an interactive map with custom markers
- **Application Submission**: Submit rental applications directly through the platform
- **Current Residences**: View and manage current rental agreements
- **Favorites System**: Save and manage favorite properties


##  Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **State Management**: Redux Toolkit + RTK Query
- **Maps**: Mapbox GL JS
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Authentication**: AWS Amplify Auth

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with AWS Cognito integration
- **File Storage**: AWS S3 (for property images)
- **API Documentation**: RESTful API design
- **Middleware**: CORS, Helmet, Morgan for security and logging

### Infrastructure & DevOps
- **Database**: PostgreSQL (Production) / SQLite (Development)
- **Cloud Services**: AWS (Cognito, S3)
- **Environment Management**: Environment-specific configurations
- **Process Management**: PM2 for production deployment

##  Project Structure

```
rental-app/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App router pages and layouts
│   │   │   ├── (auth)/      # Authentication pages
│   │   │   ├── (dashboard)/ # Protected dashboard routes
│   │   │   └── (nondashboard)/ # Public pages
│   │   ├── components/      # Reusable React components
│   │   ├── lib/            # Utilities, constants, and schemas
│   │   ├── state/          # Redux store and API slices
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   └── routes/         # API route definitions
│   ├── prisma/            # Database schema and migrations
│   │   ├── schema.prisma  # Database schema
│   │   ├── migrations/    # Database migration files
│   │   └── seedData/      # Sample data for development
│   └── package.json
└── README.md
```

##  Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- AWS account (for Cognito and S3)
- Mapbox account (for maps integration)

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token
NEXT_PUBLIC_USER_POOL_ID=your_cognito_user_pool_id
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your_cognito_client_id
```

**Backend (.env)**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/rental_app"
PORT=XXXX

```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/NanaKwameAmponsah/rental-app.git
cd rental-app
```

2. **Backend Setup**
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed  # Optional: seed with sample data
npm run dev
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```


##  Database Schema

The application uses a PostgreSQL database with the following main entities:

- **Users**: Managers and Tenants with role-based access
- **Properties**: Rental property listings with detailed information
- **Applications**: Tenant applications for properties
- **Leases**: Active rental agreements
- **Locations**: Geographic data for properties

##  Authentication & Security

- **JWT-based Authentication**: Secure token-based authentication
- **Role-based Access Control**: Separate permissions for managers and tenants
- **AWS Cognito Integration**: Enterprise-grade user management
- **Protected Routes**: Client and server-side route protection
- **Input Validation**: Comprehensive form validation with Zod schemas
- **Security Headers**: Helmet.js for security best practices

##  UI/UX Features

- **Modern Design**: Clean, professional interface with consistent branding
- **Loading States**: loading indicators
- **Error Handling**: User-friendly error messages and fallbacks
- **Toast Notifications**: Real-time feedback for user actions



##  Key Technical Implementations

### Advanced Search & Filtering
- Location-based search with geocoding
- Real-time filtering by price, bedrooms, bathrooms, amenities
- Map integration with property markers
- Debounced search input for performance

### State Management
- Redux Toolkit for predictable state management
- RTK Query for efficient API caching and synchronization
- Optimistic updates for better user experience

### Form Management
- React Hook Form for performant form handling
- Zod schema validation for type-safe form validation
- Multi-step forms with progress tracking


##  Deployment

### Frontend 
```bash
npm run build
# Deploy to Vercel or your preferred platform
```

### Backend 
```bash
npm run build
pm2 start ecosystem.config.js
```

##  Future Enhancements

- **Payment Integration**: Stripe/PayPal integration for online payments
- **Chat System**: Real-time messaging between managers and tenants
- **Mobile App**: React Native mobile application
- **Advanced Analytics**: Detailed reporting and analytics dashboard
- **AI Recommendations**: Machine learning-based property recommendations
- **Virtual Tours**: 360° property tour integration

##  Developer Info

**Nana Kwame Amponsah**
- **LinkedIn**: [linkedin.com/in/nana-kwame-amponsah](https://www.linkedin.com/in/nana-kwame-amponsah/)
- **GitHub**: [github.com/NanaKwameAmponsah](https://github.com/NanaKwameAmponsah)
- **Email**: [vfy7pe@virginia.edu](mailto:vfy7pe@virginia.edu)
- **Portfolio**: [coming soon!]

