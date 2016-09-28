# Worthwhile - contract and invoice management

## What

An application to manage issuing  contracts and invoices between Worthwhile and individual charities for a matched job.

## Why

To automate work currently done manually in order to reduce work for the Worthwhile team.

## How

### Key features:
- List of all matched jobs
- View a matched job - see key data (charity details, job details, employee details)
- Preview a contract (i.e. merge data with contract template)
- Preview an invoice (i.e. merge data with invoice template)
- Build and issues contract and invoice for a matched job - using existing system data
- Update status for a matched job
- New matched jobs to be added via some external hook (i.e. our project kicks in once a job is matched - all data to be supplied to the screens via some external API - part of existing IT systems)

### Job statuses:
- Matched - contracts not yet issued
- Pending - contracts issued not yet signed
- Completed - contracts issued and signed

### Information required from Worthwhile:
- List of data fields to be supplied by external API (we will mock the data using a JSON object)
- Template invoice (if not supplied by tomorrow, we’ll do our own template)
- Template contract (if not supplied by tomorrow, we’ll do our own template)
- Confirmation on proposed contract status.

### Jobs for us:
- Agree stack
- Build wireframes (simple drawings are fine)
- Build static html pages from wireframes
- Setup build and deployment tooling
- Request info from Worthwhile
- Divide work
