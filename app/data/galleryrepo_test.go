package data

import (
	"majlis/app/core"
	"majlis/app/models"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
)

func TestRepoImp_CreateEGallery(t *testing.T) {
	qry := `INSERT  INTO "event_gallery" ("photo_localtion","category") VALUES ($1,$2) RETURNING "event_gallery"."id"`
	type args struct {
		egallery models.EventGallery
	}
	tests := []struct {
		name    string
		args    args
		given   func(sqlmock.Sqlmock)
		want    int
		wantErr bool
	}{
		{
			name: "Normal test case 1",
			args: args{
				models.EventGallery{
					Category:       "eid",
					PhotoLocaltion: "upload/pic",
				},
			},
			given: func(mock sqlmock.Sqlmock) {
				mock.ExpectBegin()
				mock.ExpectQuery(core.FixedFullRe(qry)).WithArgs("upload/pic", "eid").WillReturnRows(
					sqlmock.NewRows([]string{"id"}).AddRow(1),
				)
				mock.ExpectCommit()
			},
			want: 1,
		},
	}
	mock, db := core.NewSQLMock()
	r := &RepoImp{
		db: db,
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			tt.given(mock)
			got, err := r.CreateEGallery(tt.args.egallery)
			if (err != nil) != tt.wantErr {
				t.Errorf("RepoImp.CreateEGallery() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("RepoImp.CreateEGallery() = %v, want %v", got, tt.want)
			}
		})
	}
}
