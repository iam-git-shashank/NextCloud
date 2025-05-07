# S3 Clone with Nx Workspace (Next.js + React + MinIO)

This project is an S3 clone built with Nx workspace using a Next.js frontend and React app. The backend is built with a microservices architecture, with separate services for IAM, Data, and Metadata. MinIO is used as the object storage, and PostgreSQL with TypeORM is used for the database layer.This project is heavily inspired from the article 'https://www.codesmith.io/blog/diagramming-system-design-s3-storage-system'. More focused on structure than UI.

## Project Structure

This project follows a monorepo structure using [Nx](https://nx.dev) to manage multiple applications and libraries in a single workspace. The applications are separated into frontend (React/Next.js) and multiple backend microservices, with each service having its own logic and responsibility.

### Backend Microservices

- **IAM Service**: Handles user authentication, authorization, and access management for the object storage.
- **Data Service**: Manages the upload and download flows of objects, ensuring proper data handling and S3-like functionality.
- **Metadata Service**: Tracks metadata for the uploaded objects, such as file names, sizes, and user information.

### Frontend

- **React**: The frontend app is built using React with Refine. It provides the user interface for uploading files, viewing uploaded files, and logging in.Refine provides many built-in hooks which make the development easy. 

## Technologies Used

- **Nx Workspace**: Monorepo management and project structure.
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: For building interactive UIs.
- **MinIO**: S3-compatible object storage solution for managing file uploads and downloads.
- **PostgreSQL**: Used for storing metadata and relational data.
- **TypeORM**: ORM for managing PostgreSQL database interactions.
- **Microservices Architecture**: Auth, Data, and Metadata services are designed to be independent, making the system scalable and maintainable.

## Nest App workflow

-Microservices
![services](https://github.com/iam-git-shashank/NextCloud/blob/master/screenshots/image.png)

### Prerequisites

- Node.js (preferably v16 or later)
- PostgreSQL Database
- MinIO Server (or any S3-compatible service)

### Clone the Repository

```bash
git clone https://github.com/your-username/s3-clone-nx.git
cd s3-clone-nx
```
