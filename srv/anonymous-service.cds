using company.anonymousproject as ap;

@path: '/odata/v4/AnonymousService'
service AnonymousService {

  entity Feedback as projection on ap.Feedback;

}
